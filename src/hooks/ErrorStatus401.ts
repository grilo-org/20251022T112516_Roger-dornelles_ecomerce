const ErrorStatus401 = (error: any) => {
  if (error) {
    if (error.response.status === 401) {
      window.location.href = '/';
      return;
    }
  }
};

export default ErrorStatus401;
