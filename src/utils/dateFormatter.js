export function dateFormatter() {
  const formatter = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  });

  let dateNow = formatter.format(new Date()).split(" ").splice(0, 3).join(" ");
  let timeNow = formatter.format(new Date()).split(" ").splice(-1).join(" ");

  return [dateNow, timeNow];
}
