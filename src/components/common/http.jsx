export const apiUrl = 'http://127.0.0.1:8000/api'

export const adminToken = () => {
    const data = localStorage.getItem('adminInfo');
    
    if(!data) return null;
    
    const adminData = JSON.parse(data);
    return adminData.token;
}