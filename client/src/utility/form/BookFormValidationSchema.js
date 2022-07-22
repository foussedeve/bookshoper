import * as yup from 'yup';
const BookFormValidationSchema= yup.object().shape({


  title:yup.string().required("Veuillez saissir le tire du livre"),
  author:yup.string().required("Veuillez saissir le nom de l'auteur"),
  pages:yup.number().required("Veuillez saissir le nombres pages du livre"),
  year:yup.string().required("Veuillez saissir la date de parution"),
  summary:yup.string().required("Veuillez saissir un petti résumé du livre"),

});
export default BookFormValidationSchema;