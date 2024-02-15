import { useRouter } from 'next/navigation';

const ProductPage = () => {
  const router = useRouter();
  const { ansattNr } = router.query; // Henter `id` fra URL-en

  return <div>Produkt ID: {ansattNr}</div>;
};

export default ProductPage;