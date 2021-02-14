import { API } from "../config";
import axios from "axios";

export const createAssessment = async (assessment) => {
  const result = await axios.post(`${API}/assessments/`, assessment);
  return result;
};

export const getAssessments = async () => {
  const result = await axios.get(`${API}/assessments/`);

  return result;
};

export const getAssessmentById = async (assessment) => {
  const result = await axios.get(`${API}/assessments/${assessment.id}`);
  return result;
};

export const updateAssessment = async (assessment) => {
  const result = await axios.put(
    `${API}/assessments/${assessment.id}`,
    assessment
  );
  return result;
};

export const deleteAssessment = async (assessment) => {
  const result = await axios.delete(`${API}/assessments/${assessment.id}`);
  return result;
};
