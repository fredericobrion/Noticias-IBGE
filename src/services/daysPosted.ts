const daysPosted = (postedDate: string) => {
  const formatedPostedDate = `${postedDate.substring(6, 10)}/${postedDate.substring(3, 5)}/${postedDate.substring(0, 2)}`;

  const currentDate = new Date();
  const postedDateObject = new Date(formatedPostedDate);

  const differenceTime = currentDate.getTime() - postedDateObject.getTime();
  const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  
    switch (days) {
      case 0:
        return 'Hoje';
      case 1:
        return '1 dia atrás';
      default:
        return `${days} dias atrás`;
    }
};

export default daysPosted;
