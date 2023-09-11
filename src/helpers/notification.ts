import { toast } from "react-hot-toast";

/**
 * Функции для вызова всплывающих уведомлений
 */

export const succesNotify = () => {
  toast.success("В ближайшее время мы вам позвоним, спасибо за обращение!", {
    style: {
      width: "400px",
      height: "90px",
      borderRadius: "10px",
      fontSize: "20px",
    },
  });
};

export const errorNotfy = () => {
  toast.error("Что-то пошло не так, попробуйте ещё раз", {
    style: {
      width: "900px",
      height: "100px",
      borderRadius: "10px",
      fontSize: "20px",
    },
  });
};
