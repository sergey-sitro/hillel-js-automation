class FetchUser {
    async getFirstUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        return await response.json();
    }
}
