import { Router } from 'express';

const router = Router()

router.get("/", (_req, res) => res.send("Get all feedback"));
router.post("/", (_req, res) => res.send("Create a feedback"));
router.get("/:id", (req, res) => res.send(`Get feedback ${req.params.id}`));
router.put("/:id", (req, res) => res.send(`Update feedback ${req.params.id}`));
router.delete("/:id", (req, res) => res.send(`Delete feedback ${req.params.id}`));

export default router;