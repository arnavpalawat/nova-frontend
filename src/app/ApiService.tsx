import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

// Helper function to handle API requests
const fetchData = async (url: string, method: string = 'GET', data: any = null) => {
    try {
        const response = await axios({
            method,
            url: BASE_URL + url,
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// API functions
export const getExamByName = async (examName: string) => {
    return fetchData(`/questions/exam/${examName}`);
};

export const getQuestionsForIa = async (iaId: number) => {
    return fetchData(`/questions/ia/${iaId}`);
};

export const getUserExamName = async (uid: number) => {
    return fetchData(`/${uid}/exam_name`);
};

export const updateUserExamName = async (uid: number, examName: string) => {
    return fetchData(`/${uid}/exam_name`, 'POST', { exam_name: examName });
};

export const createUser = async (uid: number, name: string, examName: string = '') => {
    return fetchData('/create_user', 'POST', { uid, name, exam_name: examName });
};

export const updateIaProgress = async (uid: number, ia: number, percent: number) => {
    return fetchData(`/${uid}/data/ias/${ia}/update`, 'PATCH', { percent });
};

export const updateFlashcards = async (uid: number, date: string) => {
    return fetchData(`/${uid}/data/${date}/flashcards/update`, 'PATCH');
};
