import { API } from "../config";
import axios from "axios";

export const createPatient = async (patient) => {
  const result = await axios.post(`${API}/patients/`, patient);
  return result;
};

export const getPatients = async () => {
  const result = await axios.get(`${API}/patients/`);

  return result;
};

export const getPatientById = async (patient) => {
  const result = await axios.get(`${API}/patients/${patient.id}`);
  return result;
};

export const updatePatient = async (patient) => {
  const result = await axios.put(`${API}/patients/${patient.id}`, patient);
  return result;
};

export const deletePatient = async (patient) => {
  const result = await axios.delete(`${API}/patients/${patient.id}`);
  return result;
};
