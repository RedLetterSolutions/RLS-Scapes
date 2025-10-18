import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      console.log("New lead received:", {
        id: lead.id,
        businessName: lead.businessName,
        contactName: lead.contactName,
        email: lead.email,
        projectType: lead.projectType,
      });

      res.status(201).json({
        message: "Lead submitted successfully",
        lead: {
          id: lead.id,
          businessName: lead.businessName,
          createdAt: lead.createdAt,
        },
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          error: validationError.message,
        });
      }
      
      console.error("Error creating lead:", error);
      res.status(500).json({
        message: "Failed to submit lead",
        error: "Internal server error",
      });
    }
  });

  app.get("/api/leads", async (_req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({
        message: "Failed to fetch leads",
        error: "Internal server error",
      });
    }
  });

  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      console.log("New contact received:", {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
      });

      res.status(201).json({
        message: "Contact submitted successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          createdAt: contact.createdAt,
        },
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          error: validationError.message,
        });
      }
      
      console.error("Error creating contact:", error);
      res.status(500).json({
        message: "Failed to submit contact",
        error: "Internal server error",
      });
    }
  });

  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        message: "Failed to fetch contacts",
        error: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
