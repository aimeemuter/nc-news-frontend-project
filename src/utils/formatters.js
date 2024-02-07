export const dateFormatter = (timestamp) => {
  const date = timestamp.substring(0, 10).split("-").reverse().join("/");
  const time = timestamp.substring(11, 16);
  return { date, time };
};
