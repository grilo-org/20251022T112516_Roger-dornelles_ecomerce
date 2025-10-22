const useCardMask = (value: string, cardName: string) => {
  if (cardName === 'american express') {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(\d{6})(\d{5})/g, '$1 $2 $3');
    value = value.replace(/\.$/, '');
    value = value.substring(0, 17);
    return value;
  }

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})/g, '$1 ');
  value = value.replace(/\.$/, '');
  value = value.substring(0, 19);

  return value;
};

export default useCardMask;
