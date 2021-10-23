import React, {useRef, useEffect, useState} from 'react';
import PullToRefresh from 'components/pull-to-refresh';
import './index.scss';

const RowRender = (props: { index: any }) => {
  const {index} = props;
  return (
    <div
      style={{
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'pink',
      }}
    >
      {index}
    </div>
  );
};

function App() {
  const [list, setList] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  const page = useRef<number>();
  page.current = 1;

  useEffect(() => {
    get(1);
  }, []);
  const get = (pageNum: number) => {
    setTimeout(() => {
      const newList = new Array(pageNumber).fill(true).map((item, index) => index + 1);
      // @ts-ignore
      setList(pageNumber === 1 ? newList : list.concat(newList));
      setPageNumber((pageNumber += pageNum));
      // @ts-ignore
      page.current += 1;
    });
  };

  const refresh = () => {
    console.log('get');
    return get(1);
  };

  return (
    <div className="wrapper">
      <h1>你好</h1>
      <PullToRefresh
        distanceToRefresh={56}
        onRefresh={refresh}
        getScrollContainer={true}
        className="box"
      >
        {list.map(index => (
          <RowRender index={index} key={index}/>
        ))}
      </PullToRefresh>
    </div>
  );
}

export default App;
