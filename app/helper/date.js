module.exports = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const now = `${day}-${month}-${year}-${hour}-${minute}-${seconds}`;
  return now;
};
