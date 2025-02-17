import { Router } from 'express';

const router = Router()

router.get("/", (_req, res) => { res.send("Get all reports") });
router.post("/", (_req, res) => { res.send("Create a report") });
router.get("/:id", (req, res) => { res.send(`Get reports ${req.params.id}`) });
router.put("/:id", (req, res) => { res.send(`Update report ${req.params.id}`) });
router.delete("/:id", (req, res) => { res.send(`Delete report ${req.params.id}`) });

export default router;