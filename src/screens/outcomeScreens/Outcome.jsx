import { useSelector } from 'react-redux';
import { Extrovert } from '../../components/Extrovert.jsx';
import { Introvert } from '../../components/Introvert.jsx';
import computeVersion, { EXTROVERT, INTROVERT } from '../../providers/computeVersion.js';


export default function Outcome() {
  const answers = useSelector((state) => state.versionTest.answers);
  const version = computeVersion(answers);

  console.log(answers)
  console.log(version)
  // if(version){
  //   return null
  // }

  return (
    <div>
      <main>
        {version === EXTROVERT && (
          <div>
            <Extrovert />
          </div>
        )}
        {version === INTROVERT&& (
          <div>
            <Introvert />
          </div>
        )}
      </main>
    </div>
  );
}
