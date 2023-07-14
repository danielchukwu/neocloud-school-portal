const stringToDate = (date: string) => {
  const parsedDate = new Date(date);
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate;
  }
};

export default stringToDate;
