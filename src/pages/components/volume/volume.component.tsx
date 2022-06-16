import volume1 from "../../../assets/volum1.png";
import volume2 from "../../../assets/volume2.png";
import volume3 from "../../../assets/volume3.png";
import {VolumeItens} from './volume.style';

export function Volume({ setActiveStep }: {setActiveStep: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>Volume do vazamento</h1>
      <p style={{ fontSize: 18, textAlign: "center" }}>
        Qual o volume do vazamento que deseja reportar?
      </p>

      <VolumeItens>
        <li onClick={() => setActiveStep(2)}>
          <p>Se continuar, vai acabar a água do mundo.</p>
          <img src={volume1} alt="volume 1" />
        </li>

        <li onClick={() => setActiveStep(2)}>
          <p>Se continuar, vai alagar a rua.</p>
          <img src={volume2} alt="volume 2" />
        </li>

        <li onClick={() => setActiveStep(2)}>
          <p>SSe continuar, vai virar uma poça.</p>
          <img src={volume3} alt="volume 3" />
        </li>
      </VolumeItens>
    </>
  );
}
