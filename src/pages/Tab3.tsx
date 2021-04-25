import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import logo from '../icon.png';
import { heartCircleOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle><img src={logo} alt="Logo" /> New posts</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">New posts</IonTitle>
                  </IonToolbar>
              </IonHeader>

              <IonCard class="class-1"  >
                  <IonCardHeader>
                      <IonCardTitle>Matsuo Basho 1</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent >
                      An old silent pond...<br />
                          A frog jumps into the pond,<br />
                      splash! Silence again.
      </IonCardContent>

                  <IonCardSubtitle text-right>22.03.2021 Robert J.
                        <IonIcon class="active-heart" icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>


              <IonCard class="class-1">
                  <IonCardHeader>
                      <IonCardTitle>Kobayashi Issa</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      O snail<br />
                      Climb Mount Fuji,<br />
                      But slowly, slowly!
      </IonCardContent>

                  <IonCardSubtitle text-right>22.03.2021 Jack R.
                        <IonIcon icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>

              <IonCard class="class-3">
                  <IonCardHeader>
                      <IonCardTitle>Matsuo Basho 2</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      Autumn moonlight-<br />
                                  a worm digs silently<br />
                      into the chestnut.
      </IonCardContent>

                  <IonCardSubtitle text-right>22.03.2021 Robert J.
                        <IonIcon class="active-heart" icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>


              <IonCard class="class-2">
                  <IonCardHeader>
                      <IonCardTitle>Kobayashi Issa 2</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      Trusting the Buddha, good and bad,<br />
                      I bid farewell<br />
                      To the departing year.
      </IonCardContent>

                  <IonCardSubtitle text-right>22.03.2021 Jack R.
                        <IonIcon icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>

              <IonCard class="class-3">
                  <IonCardHeader>
                      <IonCardTitle>Kobayashi Issa 3</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      Everything I touch<br />
                      with tenderness, alas,<br />
                      pricks like a bramble.
      </IonCardContent>

                  <IonCardSubtitle text-right>22.03.2021 Jack R.
                        <IonIcon icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>

              <IonCard class="class-1">
                  <IonCardHeader>
                      <IonCardTitle>Matsuo Basho 3</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      In the twilight rain<br />
                                          these brilliant-hued hibiscus -<br />
                      A lovely sunset.
      </IonCardContent>

                  <IonCardSubtitle>22.03.2021 Robert J.
                        <IonIcon icon={heartCircleOutline} /></IonCardSubtitle>
              </IonCard>

          </IonContent>
      </IonPage>
  );
};

export default Tab3;
