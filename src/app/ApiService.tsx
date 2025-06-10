import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

const fetchData = async (url: string, method: 'GET' | 'POST' | 'PATCH' = 'GET', data: any = null) => {
    try {
        const response = await api({ method, url, data });
        return response.data;
    } catch (error) {
        console.error('API error:', error);
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

export const getUserName = async (uid: string) => {
    return fetchData(`/${uid}/name`);
};

export const getUserExamName = async (uid: string) => {
    return fetchData(`/${uid}/exam_name`);
};

export const updateUserExamName = async (uid: string, examName: string) => {
    return fetchData(`/${uid}/exam_name`, 'POST', { exam_name: examName });
};

export const createUser = async (uid: string, name: string, examName: string = '') => {
    return fetchData('/create_user', 'POST', { uid, name, exam_name: examName });
};

export const updateIaProgress = async (uid: string, ia: number, percent: number) => {
    return fetchData(`/${uid}/data/ias/${ia}/update`, 'PATCH', { percent });
};

export const updateFlashcards = async (uid: string, date: string) => {
    return fetchData(`/${uid}/data/${date}/flashcards/update`, 'PATCH');
};
