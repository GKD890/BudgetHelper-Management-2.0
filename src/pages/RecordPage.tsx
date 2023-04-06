import { Container } from "react-bootstrap";
import { INavbar } from "../components/navbar";
import { RecordView } from "../components/views/recordsView";

export const RecordPage = ():React.ReactElement => {

    return (
        <>
            <INavbar />
            <Container className="w-75">
                <RecordView />
            </Container>
        </>
        
    );
  
}