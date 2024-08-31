import Nav from './components/Nav'
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
        
      </section>
      <section className='padding'>
        <PopularProducts />
       
      </section>
      <section className='padding'>
        <SuperQuality />
      
      </section>
      <section className='padding-x py-10'>
        <Services />
        {/* Service */}
      </section>
      <section className='padding'>
        <SpecialOffer />
        {/* Special Offer */}
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
        {/* Customer Reviews */}
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
        {/* Subscribe */}
      </section>
      <section className='bg-black padding-x padding-t pb-8 text-4xl'>
        <Footer />
        {/* <p>Footer</p> */}
      </section>
    </main>
  );
};

export default App;
