import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu1 = async () => {
    const result = await axios.get(`${base_url}Document1`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetDocument1ByUserSpecialiedDepartment = async (query: any) => {
    const result = await axios.get(`${base_url}Document1/GetDocument1ByUserSpecialiedDepartment?${query}`);
    if (result)
        return result;
    else
        return null;
}

export const apiUpdateSubMenu1 = async (data: any) => {
    const result = await axios.put(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiGetAllTestingCategory = async () => {
    const result = await axios.get(`${base_url}Document1PeriodicAssessment/GetAllTestingCategory`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetAllFormCategory = async () => {
    const result = await axios.get(`${base_url}Document1PeriodicAssessment/GetAllFormCategory`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu1ById = async (id: number) => {
    const result = await axios.get(`${base_url}Document1/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1 = async (data: any): Promise<any> => {
    const result = await axios.post(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiDeleteSubMenu1 = async (data: any) => {
    const result = await axios.delete(`${base_url}Document1/${data}`);
    if (result)
        return result;
    else
        return null;
}


export const apiPostSubMenu1TeachingEquipment = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document1TeachingEquipment?documentId=${docId}`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1CuriculumDistribution = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document1CuriculumDistribution?documentId=${docId}`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1SelectedTopic = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document1SelectedTopic?documentId=${docId}`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1SubjectRooms = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document1SubjectRooms`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1PeriodicAssessment = async (data: any) => {
    const result = await axios.put(`${base_url}Document1PeriodicAssessment/UpdateDocument1PeriodicAssessment`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiGetTotalClassByGradeId = async (data: any) => {
    const result = await axios.get(`${base_url}Document1/GetTotalClassByGradeId?gradeId=${data}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetTeacherInformation = async (data: any) => {
    const result = await axios.get(`${base_url}Document1/GetTeacherInformation?specializedDepartmentId=${data}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetDocument1ByDepartment = async (data: any) => {
    const result = await axios.get(`${base_url}Document1/GetDocument1ByUserSpecialiedDepartment?specialDepartmentId=${data}`);
    if (result)
        return result;
    else
        return null;
}


export const apiGetCurriculumDistributionByDoc1Id = async (docId: any) => {
    const result = await axios.get(`${base_url}Document1CuriculumDistribution/${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubjectsRoomByDoc1Id = async (docId: any) => {
    const result = await axios.get(`${base_url}Document1SubjectRooms?id=${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetTeachingEquipmentByDoc1Id = async (docId: any) => {
    const result = await axios.get(`${base_url}Document1TeachingEquipment?id=${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetPeriodicAssessmentByDoc1Id = async (docId: any) => {
    const result = await axios.get(`${base_url}Document1PeriodicAssessment/GetDocument1PeriodicAssessmentByDocument1ID/${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSelectedTopicByDoc1Id = async (docId: any) => {
    const result = await axios.get(`${base_url}Document1SelectedTopic/${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiDeleteDocument1ForeignTableByDocument1ID = async (docId: any) => {
    const result = await axios.delete(`${base_url}Document1/DeleteDocument1ForeignTableByDocument1ID?id=${docId}`);
    if (result)
        return result;
    else
        return null;
}