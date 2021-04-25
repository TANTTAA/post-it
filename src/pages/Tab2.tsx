import { IonContent, IonHeader, IonSelect, IonSelectOption, IonButton, IonTextarea, IonPage, IonItem, IonLabel, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import logo from '../icon.png';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
              <IonToolbar>
                  <IonTitle><img src={logo} alt="Logo" /> Submit a new post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New post</IonTitle>
          </IonToolbar>
              </IonHeader>
              <IonItem>
                  <IonLabel>Category of post:</IonLabel>
   <IonSelect>
                      <IonSelectOption value="class-1">Green</IonSelectOption>
                      <IonSelectOption value="class-2">Blue</IonSelectOption>
                      <IonSelectOption value="class-3">Orange</IonSelectOption>
              </IonSelect>
              </IonItem>
              <IonItem>

               

                  <IonTextarea rows={6} cols={20} placeholder="Enter your entry here..."></IonTextarea>
              </IonItem>

              <IonButton color="dark">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
