import React, { FC, useState } from 'react';
import { SubsidyList } from 'components/SubsidyList/SubsidyData';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

interface SubsidyProps {
  image: string;
  job: string;
  subsidylist: SubsidyList[];
  subsidyhistory: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Subsidy: FC<SubsidyProps> = ({
  image,
  job,
  subsidylist,
  subsidyhistory,
}) => {
  const [modalOpen1, setModal1] = useState(false);
  const [modalOpen2, setModal2] = useState(false);
  const [modalOpen3, setModal3] = useState(false);
  const [modalOpen4, setModal4] = useState(false);
  const [modalOpen5, setModal5] = useState(false);

  interface Modal {
    [code: string]: {
      modalOpen: boolean;
      setTrue: React.Dispatch<React.SetStateAction<boolean>>;
      setFalse: React.Dispatch<React.SetStateAction<boolean>>;
    };
  }

  const ModalStatus: Modal = {
    modal1: {
      modalOpen: modalOpen1,
      setTrue: setModal1,
      setFalse: setModal1,
    },
    modal2: {
      modalOpen: modalOpen2,
      setTrue: setModal2,
      setFalse: setModal2,
    },
    modal3: {
      modalOpen: modalOpen3,
      setTrue: setModal3,
      setFalse: setModal3,
    },
    modal4: {
      modalOpen: modalOpen4,
      setTrue: setModal4,
      setFalse: setModal4,
    },
    modal5: {
      modalOpen: modalOpen5,
      setTrue: setModal5,
      setFalse: setModal5,
    },
  };

  const handleOpen = (i: string) => ModalStatus[i].setTrue(true);
  const handleClose = (i: string) => ModalStatus[i].setFalse(false);

  return (
    <div className="l-subsidy">
      <div className="p-subsidy">
        <Button
          className="p-subsidy__button"
          basic
          color="grey"
          onClick={() => {
            subsidyhistory.push('/');
          }}
        >
          <Icon name="home" />ホ ー ム
        </Button>
        <div className="p-subsidy__wrapper">
          <div className="p-subsidy__jobBox">
            <div
              className="p-subsidy__jobImage -view"
              style={{ backgroundImage: `url(${image})` }}
            />
            <p className="p-subsidy__jobName -view">{job}</p>
          </div>
          <p className="p-subsidy__title -view">{`${job}向け補償一覧`}</p>
        </div>
        <ul className="p-subsidy__list">
          {subsidylist.map(item => (
            <Modal
              className="p-modal -view"
              key={item.id}
              trigger={
                <li>
                  <button
                    onClick={() => {
                      handleOpen(`modal${item.id}`);
                    }}
                    className="p-subsidy__item -view"
                    type="button"
                  >
                    {item.name}
                    <br />
                    <span className="p-modal__term -view">{item.term}</span>
                  </button>
                </li>
              }
              open={ModalStatus[`modal${item.id}`].modalOpen}
              onClose={() => {
                handleClose(`modal${item.id}`);
              }}
              basic
              size="small"
            >
              <Header icon="browser" content={item.name} />
              <Modal.Content>
                {item.summary.split('<br />').map(str => {
                  return (
                    <p className="p-modal__text -view" key={str}>
                      {str}
                    </p>
                  );
                })}
                <p className="p-modal__text -view">
                  情報元:
                  <a href={item.source[0]}>
                    {item.source[1]} <Icon name="external alternate" />
                  </a>
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="green"
                  onClick={() => {
                    handleClose(`modal${item.id}`);
                  }}
                  inverted
                >
                  <Icon name="checkmark" /> 閉じる
                </Button>
              </Modal.Actions>
            </Modal>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Subsidy;
