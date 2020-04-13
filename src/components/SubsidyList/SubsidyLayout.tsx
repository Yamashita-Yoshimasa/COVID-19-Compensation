import React, { FC, useState } from 'react';
import { SubsidyList } from 'components/SubsidyList/SubsidyData';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

interface SubsidyProps {
  image: string;
  job: string;
  subsidylist: SubsidyList[];
}

const Subsidy: FC<SubsidyProps> = ({ image, job, subsidylist }) => {
  const [modalOpen1, setModal1] = useState(false);
  const [modalOpen2, setModal2] = useState(false);
  const [modalOpen3, setModal3] = useState(false);

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
  };

  const handleOpen = (i: string) => ModalStatus[i].setTrue(true);
  const handleClose = (i: string) => ModalStatus[i].setFalse(false);

  return (
    <div className="l-subsidy">
      <div className="p-subsidy">
        <div className="p-subsidy__wrapper">
          <div className="p-subsidy__jobBox">
            <div
              className="p-subsidy__jobImage -view"
              style={{ backgroundImage: `url(${image})` }}
            />
            <p className="p-subsidy__jobName -view">{job}</p>
          </div>
          <p className="p-subsidy__title -view">{`${job}向け助成金一覧`}</p>
        </div>
        <ul className="p-subsidy__list">
          {subsidylist.map(item => (
            <Modal
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
              <Header icon="browser" content="Cookies policy" />
              <Modal.Content>aaaaaaa</Modal.Content>
              <Modal.Actions>
                <Button
                  color="green"
                  onClick={() => {
                    handleClose(`modal${item.id}`);
                  }}
                  inverted
                >
                  <Icon name="checkmark" /> Got it
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
