import { Router } from 'express';

const router = Router()

router.get("/", (_req, res) => res.send("Get all evaluations"));
router.post("/", (_req, res) => res.send("Create an evaluation"));
router.get("/:id", (req, res) => res.send(`Get evaluation ${req.params.id}`));
router.put("/:id", (req, res) => res.send(`Update evaluation ${req.params.id}`));
router.delete("/:id", (req, res) => res.send(`Delete evaluation ${req.params.id}`));

export default router;