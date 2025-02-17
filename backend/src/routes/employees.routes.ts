import { Router } from 'express';

const router = Router();

// Basic CRUD for Employees
router.get("/", (_req, res) => res.send("Get all employees"));
router.post("/", (_req, res) => res.send("Create an employee"));
router.get("/:id", (req, res) => res.send(`Get employee ${req.params.id}`));
router.put("/:id", (req, res) => res.send(`Update employee ${req.params.id}`));
router.delete("/:id", (req, res) => res.send(`Delete employee ${req.params.id}`));

export default router;