import React from 'react';
import { Button, Modal } from 'antd';

const AppWorks = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };

    return (
        <div id='works' className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Travel</h2>
                    <p>Stop wasting time and money travelling to the wrong destination. Happiness guaranteed!</p>
                </div>
                <div className="contentHolder">
                    <Button onClick={showModal}>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </Button>
                </div>
                <Modal title="Egypt Mystery" open={isModalOpen} 
                    onCancel={handleOk}
                    width={620}
                    footer= {[
                        <Button key="close" onClick={handleOk}>Close</Button>
                    ]}
                >
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/BapSQFJPMM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal>
            </div>
        </div>
    );
}

export default AppWorks;