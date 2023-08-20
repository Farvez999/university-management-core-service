import express from 'express';
import { AcademicSemesterController } from './academicSemesterController';
const router = express.Router();

router.post('/', AcademicSemesterController.insertIntoDB);

export const AcademicSemesterRoutes = router;
