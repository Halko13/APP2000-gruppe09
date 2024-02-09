import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // Henter `id` fra URL-en

  return <div>Produkt ID: {id}</div>;
};

export default ProductPage;