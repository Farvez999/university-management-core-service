import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemesterController';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllForDB);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

export const AcademicSemesterRoutes = router;
