const microtime = require("microtime");
const search = require("./rabin-karp");

function short() {
  const text = "this is a test text";
  const pattern = "text";

  const start = microtime.now();
  search(text, pattern);
  const end = microtime.now();

  const m = pattern.length;
  const n = text.length;

  return { delta: end - start, m, n, "m + n": m + n };
}

function medium() {
  const text = `Fugiat nisi ipsum velit occaecat occaecat reprehenderit elit ea. Eu eiusmod elit Lorem ullamco sunt nulla sint tempor consequat voluptate id. Voluptate eiusmod occaecat laborum fugiat exercitation irure nisi labore. Duis aliquip qui nisi ex eiusmod consectetur est ad dolor incididunt.

Magna do laborum consectetur proident officia est laborum sunt aute amet mollit. Anim quis excepteur ullamco commodo excepteur voluptate velit aliquip proident labore do culpa aute. Irure et amet Lorem labore aliqua quis Lorem nostrud duis consequat ut esse aute.

Consectetur Lorem do nostrud amet occaecat voluptate qui. Occaecat laborum cillum id quis magna amet consectetur veniam aliquip culpa ipsum deserunt dolor. Magna fugiat pariatur incididunt Lorem nisi ipsum deserunt non anim dolore proident irure cupidatat. Exercitation qui mollit commodo velit eiusmod excepteur ex magna incididunt tempor ea. Laborum minim exercitation occaecat irure aliquip elit mollit consequat tempor in. Labore est id ad sit proident laborum id elit velit voluptate culpa aliqua.

Cupidatat ea ex id anim. Est veniam reprehenderit ea ea minim qui do voluptate. Ex veniam magna velit enim enim enim excepteur. Magna aliquip aliquip culpa anim aute ipsum qui aute duis consequat sint esse aliquip irure. Cupidatat sint laborum consectetur esse. Sunt Lorem nulla in nostrud nostrud non laboris ea exercitation officia non. Nostrud esse aliqua duis pariatur sunt mollit qui minim eu laborum aliquip ullamco.

Nostrud fugiat eu labore nisi reprehenderit ipsum aliqua ut officia commodo nostrud dolor dolor excepteur. Minim do duis duis veniam laborum mollit Lorem esse enim velit cillum officia. Dolore culpa aliquip occaecat minim commodo commodo ad et labore officia.

Eiusmod veniam sit cupidatat reprehenderit. Proident reprehenderit non consectetur est eu labore aliquip qui ad dolore ad. Dolore ex consectetur sunt culpa tempor exercitation aliqua aliquip quis quis consequat Lorem nostrud. Duis id minim sunt deserunt do veniam non eiusmod ex.

Dolore tempor irure amet nisi proident aliqua ex deserunt sit sint. Do Lorem adipisicing officia ex esse proident esse aute ipsum. Minim culpa dolore nisi ullamco ex ad dolor irure minim laboris ea. Adipisicing minim velit consectetur magna veniam officia. Id laboris sunt nisi non nostrud aliqua veniam incididunt esse voluptate occaecat. Enim laborum quis in eiusmod ad proident.

Proident aliqua ad ullamco ut Lorem magna proident aute esse pariatur quis. Aliquip ut ad excepteur dolor excepteur aliquip exercitation veniam ut occaecat elit id. Velit enim occaecat ad nulla id adipisicing occaecat nisi culpa laborum. Sunt veniam amet nostrud Lorem quis in enim commodo magna incididunt. Reprehenderit fugiat veniam dolor culpa Lorem voluptate exercitation eu deserunt. Sit ipsum sunt id cupidatat ex. Dolore quis id enim ullamco ex aliqua duis commodo minim id est officia cupidatat dolor.

Excepteur aliquip adipisicing pariatur qui deserunt quis cillum consectetur. Voluptate magna Lorem nisi veniam. Do sunt aliquip id qui incididunt ex aliqua aliquip. Pariatur cillum fugiat est elit ex id tempor. Laboris velit esse nostrud exercitation dolor est consectetur fugiat cupidatat. Minim ullamco non esse velit est exercitation cillum elit eu ex irure amet.

Ea amet sit consectetur enim. Mollit sint et sit nulla voluptate pariatur sit eu id. Aute aliqua dolore cupidatat reprehenderit aute dolor. Adipisicing tempor pariatur exercitation eu Lorem amet et dolore laboris do commodo.`;
  const pattern =
    "Tempor enim voluptate qui proident occaecat deserunt et aliqua non labore Lorem elit.";

  const start = microtime.now();
  search(text, pattern);
  const end = microtime.now();

  const m = pattern.length;
  const n = text.length;

  return { delta: end - start, m, n, "m + n": m + n };
}

function long() {
  const text = `Cillum adipisicing aliquip Lorem commodo enim Lorem cillum esse nisi ea ipsum proident veniam. Dolor laboris quis ipsum exercitation voluptate nostrud proident magna aute qui. Deserunt sint nulla excepteur eiusmod aute non ad qui. Ullamco aliquip velit amet ipsum voluptate fugiat Lorem pariatur ipsum consectetur.

Laboris commodo anim velit aute esse excepteur dolore. Exercitation incididunt reprehenderit excepteur cillum Lorem nisi deserunt officia deserunt in veniam laborum nulla. Sint aliquip sit aute cupidatat proident. Est tempor mollit id anim. Velit duis qui commodo excepteur nostrud esse qui. Amet non fugiat nisi reprehenderit nostrud.

Cillum excepteur aliquip laborum deserunt proident deserunt commodo non exercitation adipisicing non. Sint incididunt qui enim labore qui ipsum nisi duis id esse. Ullamco ea minim nostrud quis laborum. Proident culpa ea ea fugiat esse do quis ad.

Officia magna occaecat minim nulla veniam. Consectetur ea occaecat sunt ut sunt proident duis. Amet tempor non quis ipsum. Commodo pariatur mollit sunt laborum est aute reprehenderit in ad duis cupidatat nulla dolor. Mollit culpa ut ea et pariatur. Culpa labore Lorem nisi veniam sint occaecat occaecat qui tempor esse qui duis.

Adipisicing et anim irure est ullamco. Ad enim cupidatat veniam fugiat sit aliquip ipsum amet fugiat deserunt. Deserunt aliquip voluptate laboris consequat.

Aute cillum ipsum ipsum fugiat reprehenderit in irure irure consequat occaecat excepteur. Est esse anim qui nostrud proident. Est incididunt non aute Lorem Lorem est cupidatat cupidatat id. Ut cillum quis ex laborum sint anim. Deserunt tempor excepteur nostrud et ut non fugiat reprehenderit. Minim aliquip ex Lorem ullamco adipisicing pariatur labore occaecat commodo in ut reprehenderit aute dolor. Aliqua nisi exercitation veniam sunt ipsum do dolore anim.

Tempor reprehenderit dolor laboris enim laboris ad magna laborum culpa ad. Enim nostrud sint non sit adipisicing sit enim cillum qui amet minim in. In enim quis voluptate minim occaecat sint ea eu anim non minim excepteur duis aute. Amet eu in est ut esse in sint excepteur pariatur laboris. Quis cillum nulla laboris reprehenderit eiusmod. Incididunt qui cillum ex laboris tempor amet est eu minim. Laborum laborum non sit occaecat.

Fugiat est in minim nostrud dolore fugiat dolor culpa laboris excepteur nulla cupidatat. Est sint officia aute mollit. Nulla sint est non est consequat veniam excepteur est minim esse dolore.

Id in et excepteur eu irure irure sunt nostrud reprehenderit anim elit ipsum consequat incididunt. Laboris veniam reprehenderit ex dolore. Anim aliqua ad id sit dolore in tempor Lorem fugiat proident incididunt eu. Aute exercitation nisi id officia amet deserunt voluptate sunt sint reprehenderit voluptate velit et. Ex veniam incididunt Lorem mollit duis nulla ea nostrud commodo ex cillum. Qui ex labore reprehenderit culpa aute exercitation eu nulla est. Ad ex dolor aliqua cillum ullamco amet duis occaecat esse non.

Magna eiusmod exercitation eu proident sit. Do ut mollit nostrud occaecat. Magna occaecat nostrud ipsum do nisi amet laboris proident in adipisicing quis quis. Est tempor aliquip mollit non minim eu officia minim proident. Amet nisi laboris sit dolor voluptate aliquip cupidatat aliqua do. Aute amet nostrud aliquip dolore in adipisicing laboris esse excepteur veniam ea.

Aute magna duis officia veniam adipisicing sit aute anim ipsum fugiat exercitation commodo dolore adipisicing. Ad commodo dolore quis occaecat proident ex. Dolore incididunt Lorem proident aliqua tempor occaecat aute excepteur exercitation deserunt sunt. Excepteur do laborum eu magna pariatur pariatur ex esse. In consequat adipisicing excepteur eu non ipsum dolore enim quis do et minim reprehenderit. Culpa commodo adipisicing pariatur ut deserunt qui deserunt sint fugiat nisi amet amet. Ipsum commodo ullamco enim est cillum proident proident.

Deserunt amet dolor qui voluptate Lorem labore deserunt ad et amet officia enim. Exercitation reprehenderit consequat irure aute ex sint duis. Reprehenderit Lorem officia excepteur nisi sit cillum occaecat. Qui irure ullamco proident sint enim ullamco eiusmod et voluptate nisi ea tempor. Quis fugiat qui proident anim. Sit sit quis fugiat commodo ipsum officia aliqua consequat.

Dolor dolor voluptate ex ullamco adipisicing ut dolore veniam commodo non do. Culpa in sint Lorem incididunt labore excepteur pariatur. Veniam qui tempor minim laboris dolor in. Culpa anim non et nisi in. Sint cupidatat duis occaecat magna sunt aute ea exercitation culpa velit nostrud. Quis et amet nisi voluptate do ut excepteur labore aliquip pariatur minim ut et exercitation.

Ipsum laborum fugiat magna officia cillum nulla elit est ad laborum duis excepteur. Esse culpa officia ex sunt irure dolor aute duis duis. Proident et dolore velit aliquip consequat ad ex et laboris anim. Incididunt cupidatat sit incididunt in. Labore voluptate consequat sunt ullamco id.

Ex fugiat ullamco tempor in id. Proident elit voluptate enim excepteur excepteur nostrud. Nisi sunt quis elit nulla esse eu voluptate magna officia sit in. Pariatur qui voluptate nulla sint nisi.

Sint officia eiusmod voluptate consectetur ipsum qui voluptate veniam non. Nostrud ullamco exercitation ipsum id et dolor amet nisi duis cupidatat dolor magna laborum Lorem. Cupidatat reprehenderit aute ea sunt aute sunt. Occaecat cillum proident incididunt adipisicing voluptate cillum minim sint in ea qui sint proident veniam. Occaecat tempor adipisicing commodo eu proident consectetur.

Adipisicing id eu mollit reprehenderit labore occaecat. Nulla aute nostrud ipsum cillum sint ullamco aliquip elit cupidatat aute in consequat id consectetur. Culpa est esse aliqua aliquip incididunt exercitation nostrud aute culpa sint duis. Quis cillum tempor nostrud consectetur eiusmod nulla nisi irure id officia quis occaecat cillum.

Voluptate ad elit consectetur magna. Voluptate irure qui exercitation excepteur adipisicing esse irure consequat dolore non do. Consectetur proident aliqua officia cillum ea mollit duis cupidatat.

Cupidatat veniam non aliqua aliqua cillum commodo reprehenderit voluptate fugiat occaecat in voluptate veniam ea. In aute non est commodo occaecat. Dolor aliquip in dolore duis velit nostrud. Id culpa ut ullamco laboris eiusmod.

Et velit excepteur quis minim fugiat ea eiusmod. Mollit velit minim cupidatat est. Nostrud sit incididunt ullamco eiusmod ex elit labore duis est duis ullamco.

Est ut in do esse laborum magna do velit amet eiusmod irure ad. Qui ad fugiat do ex ullamco ea dolor consequat dolor ex. Ex voluptate ullamco eiusmod excepteur ut dolore incididunt id veniam fugiat id ex culpa. Consequat cupidatat aliquip ut id proident commodo laborum non consequat laborum sunt mollit adipisicing. Consectetur excepteur laborum mollit commodo culpa incididunt pariatur sit.

Occaecat voluptate laborum minim nostrud nostrud ea Lorem anim eiusmod irure adipisicing Lorem tempor. Id adipisicing quis nostrud Lorem esse nulla proident esse commodo qui deserunt esse. Est tempor adipisicing dolore velit.

Incididunt nulla irure aliqua qui proident pariatur exercitation. Consequat pariatur amet fugiat velit anim ut exercitation enim officia in aute. Proident nulla ex dolore anim velit anim Lorem exercitation commodo occaecat veniam in. Eiusmod enim pariatur pariatur nulla voluptate velit nisi sit eiusmod quis ipsum laboris incididunt aliqua.

Est elit veniam velit id duis excepteur deserunt veniam do velit. Incididunt Lorem eiusmod minim ullamco fugiat labore ex sit occaecat sunt exercitation mollit. Consectetur duis ex occaecat non amet in cupidatat est proident esse. Veniam eiusmod eu adipisicing ea sit esse eiusmod nisi cillum do culpa excepteur. Sunt cillum cillum veniam sunt aute ad laboris incididunt labore consectetur nostrud. Sint et elit reprehenderit incididunt deserunt quis tempor nulla culpa ipsum aliquip ut. Proident aliquip id ex in ad eiusmod proident incididunt deserunt culpa sunt sint nostrud non.

Amet excepteur sint velit nisi eu laborum sit duis. Nostrud veniam veniam mollit aliqua. Proident cillum eiusmod in reprehenderit Lorem culpa adipisicing ea id minim do dolore commodo. Culpa velit tempor consequat in aliqua esse amet eu Lorem id sunt.

Do cupidatat labore sint consequat. Fugiat fugiat amet in nostrud. Laboris sunt magna sit elit aliquip Lorem.

Ut aliqua consectetur dolore tempor elit. Dolore mollit est in excepteur laborum cillum id aliqua consectetur commodo anim amet sit elit. Anim anim ea non dolore veniam reprehenderit elit. Tempor ex minim dolor ullamco.

Excepteur est cupidatat officia fugiat. Quis id non eiusmod ea sint proident consectetur officia. Labore ullamco amet nostrud elit ea ut minim proident id velit excepteur id.

In nulla duis consectetur enim esse deserunt commodo sint irure cupidatat cupidatat ullamco do proident. Voluptate mollit id nostrud cupidatat irure reprehenderit anim cupidatat. Amet nostrud ex commodo nostrud deserunt culpa tempor aliqua fugiat id irure non consequat. Irure mollit reprehenderit ullamco velit ad sint amet in. Ipsum dolore proident consequat aliquip magna laboris veniam eiusmod commodo sit irure adipisicing Lorem.

Sunt quis officia et in pariatur veniam aliquip pariatur. Ullamco aliquip ad ea est incididunt amet id sit irure do aute mollit elit. Est fugiat excepteur et exercitation laborum ullamco excepteur pariatur occaecat laboris. Eiusmod reprehenderit cillum officia tempor incididunt excepteur velit velit elit. Mollit duis nulla fugiat ullamco irure veniam. Aute veniam ullamco ea ea sit amet nostrud proident. Excepteur consequat incididunt ut eu.

abcdefghijklmnopqrstuvwxyz`;
  const pattern = "abcdefghijklmnopqrstuvwxyz";

  const start = microtime.now();
  search(text, pattern);
  const end = microtime.now();

  const m = pattern.length;
  const n = text.length;

  return { delta: end - start, m, n, "m + n": m + n };
}

console.log({ short: short(), medium: medium(), long: long() });
