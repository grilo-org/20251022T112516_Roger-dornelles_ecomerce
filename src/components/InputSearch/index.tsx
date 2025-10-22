import { useEffect, useState } from 'react';
import * as styled from './styled';
import { BsSearch } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import apiFullText from '../../api/fullTextSearch';

interface InputSearchProps {
  handleUserSearch: (value: any) => void;
}

const InputSearch = ({ handleUserSearch }: InputSearchProps) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [resultSearch, setResultSearch] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [listProductSearch, setListProductSearch] = useState([]);

  useEffect(() => {
    if (valueInput.length < 3) {
      setListProductSearch([]);
      setError('');
      setResultSearch([]);
    }

    if (valueInput.length === 0) {
      setResultSearch([]);
      setError('');
    }

    handleFullTextSearch();
  }, [valueInput]);

  const handleFullTextSearch = async () => {
    if (valueInput.length >= 3) {
      await apiFullText.fullTextSearch(valueInput).then((result) => {
        if (!result?.data.data.length) {
          setResultSearch([]);
          setError('Opss, não achamos o que procura...');
        }

        if (result?.data.data.length) {
          setListProductSearch(result.data.data);
          setError('');
          setResultSearch(result.data.data);
        }
      });
    }
  };

  const handleSearchMagnifyingGlass = async () => {
    if (listProductSearch) {
      handleUserSearch(listProductSearch);
      setResultSearch([]);
      setValueInput('');
    }
  };

  const handleSearchOneItemSelected = async (value: string) => {
    if (value) {
      await apiFullText.fullTextSearch(value).then(async (result) => {
        if (result?.data.data.length) {
          handleUserSearch(result.data.data);
        }
      });
      setValueInput('');
      setResultSearch([]);
      setError('');
      return;
    }
  };

  return (
    <styled.Container>
      <styled.Input>
        <form>
          <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} maxLength={55} />
          <strong onClick={handleSearchMagnifyingGlass}>
            <BsSearch />
          </strong>

          {valueInput && valueInput.length >= 3 && (
            <span
              onClick={() => {
                setValueInput('');
                setError('');
              }}
            >
              <BsXLg />
            </span>
          )}
        </form>
        {resultSearch.length >= 1 ? (
          <styled.BoxSearch>
            <ul>
              {resultSearch.map((item: { description: string; name: string; id: number }) => {
                return (
                  <styled.Li key={item.id} onClick={() => handleSearchOneItemSelected(item.name)}>
                    {item.name ? item.name : item.description}
                  </styled.Li>
                );
              })}
            </ul>
          </styled.BoxSearch>
        ) : null}

        {error && <styled.BoxSearch>{error ? error : ''}</styled.BoxSearch>}
      </styled.Input>
    </styled.Container>
  );
};

export default InputSearch;
