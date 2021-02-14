import { API } from "../config";
import axios from "axios";

export const createAssessmentType = async (assessmentType) => {
  const result = await axios.post(`${API}/assessment_type/`, assessmentType);
  return result;
};

export const getAssessmentTypes = async () => {
  const result = await axios.get(`${API}/assessment_type/`);

  return result;
};

export const getAssessmentTypeById = async (assessmentType) => {
  const result = await axios.get(`${API}/assessment_type/${assessmentType.id}`);
  return result;
};

export const updateAssessmentType = async (assessmentType) => {
  const result = await axios.put(
    `${API}/assessment_type/${assessmentType.id}`,
    assessmentType
  );
  return result;
};

export const deleteAssessmentType = async (assessmentType) => {
  const result = await axios.delete(
    `${API}/assessment_type/${assessmentType.id}`
  );
  return result;
};
