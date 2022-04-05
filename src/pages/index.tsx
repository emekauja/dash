import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { HeaderWithSearch } from '@/components/controls/headerwithsearch/headerwithsearch';
import { Card } from '@/components/primitive/card/card';
import { Pagination } from '@/components/primitive/pagination/pagination';
import { IData, MenuObj } from '@/types';
import { getPagingRange } from '@/utils/getPageRange';
import { fetchDataByType } from '@/utils/strapi';
import useDebounce from '@/utils/useDebounce';

const menubar: MenuObj = {
  spacecraft: { key: 'spacecraft', datavalue: 'spacecrafts' },
  animal: { key: 'animal', datavalue: 'animals' },
  comics: { key: 'comics', datavalue: 'comics' },
  book: { key: 'book', datavalue: 'books' },
};

const Index = () => {
  // const router = useRouter();
  const [activePage, setActivePage] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 800);
  const [dataType, setDataType] = useState(menubar.spacecraft.key);

  const { data, isPreviousData } = useQuery(
    ['stapis', dataType, debouncedSearchValue, activePage],
    () => fetchDataByType(dataType, debouncedSearchValue, activePage),
    { keepPreviousData: true }
  );

  const pageNumbers = getPagingRange(activePage, {
    total: data?.page.totalPages,
    length: 6,
  });

  // todo:  issue when you are in paginated page and search new item u cant see it cause page is not been reset

  return (
    <div className="bg-gray-800">
      {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
      <div className="sticky top-0 z-50 w-full bg-black bg-opacity-60 p-5 shadow-sm backdrop-blur-md backdrop-saturate-150">
        <HeaderWithSearch
          menubar={menubar}
          selectedMenuItem={dataType}
          onMenuItemSelect={(val) => setDataType(val)}
          onSearchChange={(text) => setSearchValue(text)}
        />
      </div>

      <div className="grid min-h-screen grid-cols-3 place-content-center gap-x-3 gap-y-5 px-24 pb-24 pt-10">
        {!!data?.[menubar[dataType].datavalue as keyof Omit<IData, 'page'>] &&
          data?.[menubar[dataType].datavalue as keyof Omit<IData, 'page'>]?.map(
            (item) => <Card key={item.uid} item={item} />
          )}
      </div>

      <div className="fixed inset-x-0 bottom-5 mx-auto  w-2/3">
        <Pagination
          activePage={activePage}
          pageNumbers={pageNumbers}
          disablePreviousBtn={activePage === 0}
          disableNextBtn={isPreviousData || data?.page?.lastPage}
          onNextClick={() => {
            if (!isPreviousData && !data?.page?.lastPage) {
              setActivePage((prev) => prev + 1);
            }
          }}
          onPreviousClick={() => setActivePage((prev) => Math.max(prev - 1, 0))}
          onPageItemSelect={(val) => setActivePage(val)}
        />
      </div>
    </div>
  );
};

export default Index;
