import { Banner, Container, SearchCategory } from '@/components'
import { Suspense } from 'react';
import SearchCategorySkeleton from '@/components/loading/SearchCategorySkeleton';

export default async function Home() {

  return (
    <div className='p-4 sm:p-8'>
      <Container>
        <Banner />
        <Suspense fallback={
          <SearchCategorySkeleton />
        }>
          <SearchCategory />
        </Suspense>

      </Container>
    </div>
  )
}
