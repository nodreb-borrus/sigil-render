import { sigil, stringRenderer } from '@tlon/sigil-js'
import fs from 'fs'


function generateSigil(folder, name) {
  const n = name.replace('~','');
  const svg_file = './' + folder + '/' + n + '.svg';

  const r = sigil({
    patp: n,
    renderer: stringRenderer,
    size: 550,
    colors: ["#aaaaaa","#ffffff"]
  });

  if (!fs.existsSync(folder)){
    fs.mkdirSync(folder, { recursive: true });
  }

  fs.writeFile(svg_file, r, function(err, data) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}


generateSigil(".", "nodreb-borrus")
