const useFormattedDate = (date: string) => {
  date = date.replace(/\D/g, '');
  date = date.replace(/(\d{2})(\d)/, '$1/$2');
  date = date.replace(/(\d)(\d{2})/, '$1/$2');
  return date;
};

export default useFormattedDate;
