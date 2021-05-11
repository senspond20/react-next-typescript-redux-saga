import { commonStyle } from '@components/Layouts/Theme';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const style = {
    boarderlic :`
    border: 1px solid #999;
    border-radius:8px;
`
}
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media(max-width: 1450px){
            .toc{
                grid-row: 4 / 5;
                grid-column: 1 / 4;
            }
            /* aside{
                grid-row: 3 / 5;
                grid-column: 1 / 4;
            } */
            section{
                grid-column: 1 / 4;
            }
            .headerMenu{
                display:block;
            }
        }

`;
const GridWrap = styled.section`
   max-width: 1600px;
   display: grid;
   grid-auto-rows: minmax(100px, auto);
   gap: .5em;
   grid-template-columns: 1fr 4fr 1fr;
`;
const Header = styled.header`
    padding: 1em;   
    grid-column: 1 / 4;
    z-index:1000;
    height:30px;
    /* background-color: #fefefe; */
    background-color: #0f3d57;
    ${commonStyle.flex.flexCenter}
    /* ${style.boarderlic} */
    a {
        color:#fff;
    }
    position:sticky;
    top:0;
`;

const Nav = styled.nav`
    background-color:rgba(0,0,0,0.15);
    padding: 1em;
    grid-column: 1 / 4;
    ${style.boarderlic};
`;
const Footer = styled.footer`
  padding: 1em;
  grid-column: 1 / 4;
  ${style.boarderlic};
`;
const FooterItem = styled.footer`
    /* width:960px; */
    /* background-color:red; */
    text-align:center;
    ${commonStyle.flex.flexCenter};
`
const Section = styled.section`
    /* background-color: lightyellow; */
    background-color: rgba(0,0,0,0.009);
    padding: 1em;
    ${style.boarderlic};
`
const TopBtn = styled.div`
    position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background-color: #0f3d57; color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;
`;
const Anno = styled.p`
    color: #4ba1c3;
`
/**
 * ul
 */
const HeaderMenu = styled.ul`
    ${commonStyle.flex.flexJustify}
    /* display:flex; */
    background-color: #0f3d57;
    /* ${style.boarderlic} */
    color: #eee;
    padding:10px 15px;
    li {
        list-style:none;
        margin: 0 15px 0 0;
    }
`;
const Aside = styled.div`
    div.aside_hero{
        img{
            border-radius:50%;
        }
    }
    ul.aside_category{
        li{

        }
    }
`;
const AsideSticky = styled.div`
    position: sticky;
   top: 190px; //15
`;

const TocWrap = styled.article`
  div.toc{
    position: sticky;
    top: 190px; //15
  }
`;
/**
 * li
 */
const Item = styled.li`
    
`;
const ThemeSwitchWrap = styled.div`
    float:right;
`;

/**
 * 최상단으로 이동
 */
const goToTop = () =>{
    window.scrollTo(0, 0)
}
type Props ={
    link : string, name : string
}
const MenuItem = (prop : Props) =>{
   return (<Item><Link href={prop.link}><a>{prop.name}</a></Link></Item>);
};

const handle =()=>{
    return(
        <Wrapper>
        <div>
            <GridWrap>
            <div>
                Logo    
            </div>
            <Header>
                {/* <Anno>header</Anno> */}
                <div>
                    <input type={'text'} placeholder={'검색어를 입력해주세요'}></input>
                    <HeaderMenu className='headerMenu'>
                        <MenuItem link={'/'} name={'Home'}/>
                        <MenuItem link={'/blog'} name={'Blog'}/>
                        <MenuItem link={'/service'} name={'Service'}/>
                        <MenuItem link={'/about'} name={'About'}/>
                    </HeaderMenu>
                    <ThemeSwitchWrap>테마스위치 Light/Dark</ThemeSwitchWrap>
                </div>

            </Header>
                <TocWrap>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia repellat repellendus exercitationem odit animi repudiandae ipsum facilis inventore! Maiores, corrupti officiis. Molestias neque voluptate adipisci aspernatur deserunt, delectus sapiente!</div>                
                    <div className="toc">
                        <Anno>Table of Centens</Anno>
                        <ul>
                            <li>1. 목차1</li>
                            <li>2. 목차2</li>
                            <li>3. 목차3</li>
                            <li>4. 목차4</li>
                            <li>5. 목차5</li>
                            <li>6. 목차6</li>
                        </ul>

                    </div>
  
                </TocWrap>
                <Section>
                    <main>
                        <Anno>main</Anno>
                        <h1>H1 안녕하세요</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore praesentium temporibus labore veniam similique quaerat nihil velit illo architecto. Illo officiis veritatis dolorum! Itaque repellat maxime nobis perspiciatis eum, corporis consequatur quis ut enim veritatis, animi deserunt facilis aspernatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum qui repellendus corporis dignissimos nostrum culpa temporibus, consequuntur, ratione, perferendis totam veritatis fugiat? Minus quam harum dignissimos dolorum ipsum veritatis non laborum beatae, modi perferendis! Praesentium vitae quia cumque quis quae inventore laudantium itaque quos! Voluptates vero optio temporibus excepturi!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil eius omnis quasi corporis unde doloremque vel a? Facilis laborum voluptates voluptate vero inventore nemo minus esse amet, veritatis itaque!
                        Aspernatur numquam velit at repudiandae perspiciatis et officiis aperiam ipsam qui ullam expedita quibusdam maiores maxime, assumenda quisquam impedit ab sapiente molestiae omnis temporibus sit. Ex, dicta nihil. Ipsam, quod.
                        Maiores sit quo in hic ex voluptates possimus sunt libero saepe accusantium facere aliquid labore dolores officia consectetur, laboriosam soluta quae officiis numquam perferendis eos quaerat temporibus ipsum. A, ullam?
                        Velit in possimus perspiciatis incidunt adipisci eaque at blanditiis, consequatur eos natus amet, animi, mollitia veniam commodi asperiores nesciunt quasi tempore perferendis hic voluptates quis doloribus! Sit ducimus eos laudantium!
                        Optio officiis impedit rerum ipsam, corrupti a maiores. Dolore molestias nulla ratione enim voluptas esse commodi reprehenderit, repellat magnam ea, corporis aliquid obcaecati est corrupti, nemo expedita iste totam ipsum.
                        Sit, quidem inventore? Quas iure assumenda quae ipsum ipsa, dignissimos rem magni optio rerum incidunt placeat saepe inventore necessitatibus alias at molestiae repudiandae odit debitis dolorum veritatis quia est consectetur!
                        Non placeat modi tempore ipsum. Dolorem odio blanditiis quam doloremque inventore a. Quia, rerum quis velit id expedita accusantium cum odio temporibus pariatur eveniet dicta eius sequi perferendis, nostrum hic.
                        Aperiam quis accusantium, vero repudiandae nulla magni quam? Alias beatae pariatur odio harum saepe perferendis nemo ipsum fugiat eius obcaecati assumenda corrupti qui fugit, facere dignissimos accusantium rem dicta. A.
                        Suscipit cupiditate rerum id voluptatem debitis perferendis, vel quos voluptate ab tenetur expedita et blanditiis error corrupti sequi deleniti dolores temporibus ducimus eius exercitationem corporis nisi a. Dicta, at nostrum.
                        Commodi sint quas repudiandae nostrum. Dolores consequuntur quaerat, facere culpa voluptatibus natus, voluptates libero facilis dicta modi doloremque asperiores incidunt. Quasi enim nobis expedita eveniet ipsa, tempore illo aperiam sed!
                        Consequatur quaerat commodi neque cupiditate incidunt praesentium libero, tenetur quas numquam mollitia minima! Veniam, esse obcaecati maiores delectus eveniet expedita nulla error ea ipsam dolorum nisi qui? Quidem, quam. Illum.
                        Error ipsam molestiae odio. Sit eligendi nam aperiam modi porro officiis illo neque ad quae. Eius, dolores! Officiis esse minima dolore corporis laudantium porro facilis error, ratione consectetur numquam et.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione voluptas culpa quam excepturi impedit amet. Tempore quod amet nemo nostrum, ea iusto rem laborum, optio ullam facilis libero ipsam.
                        Inventore fuga, ipsum veritatis, aspernatur officiis in quisquam doloremque velit soluta amet voluptatem nulla ratione tempora dolorem! Ipsa itaque minus, aut consectetur, assumenda quidem laborum dolore iste, a facere fugit?
                        Porro perspiciatis accusantium magnam vitae eaque modi voluptates repellendus doloremque quae minima quisquam, nulla culpa accusamus minus quis optio! Commodi quas reiciendis et facere magni incidunt accusantium, nostrum amet aliquam.
                        Veritatis iste cupiditate, suscipit, error placeat doloribus quia ipsam fugit vero pariatur hic esse delectus dignissimos non. Fuga, labore incidunt eaque rerum aperiam atque doloremque magni autem consequatur perspiciatis ducimus?
                        Laudantium perspiciatis expedita quis nulla, incidunt rem veritatis culpa autem iure libero molestias saepe magni eum unde neque provident distinctio? Reprehenderit quidem id doloribus quibusdam assumenda cum voluptate quia magnam.
                        Repellat illum tempora, porro sit omnis quibusdam deserunt aperiam veritatis aut quis dolorum amet ipsa dignissimos cupiditate placeat dolores architecto laborum error saepe esse pariatur ad eum voluptatum. Numquam, earum.
                        Totam suscipit eius consequatur eum voluptatem, consectetur tenetur nulla deserunt velit quia minus dolorem. Rerum dolor magni neque, delectus facilis eligendi consequatur! Placeat pariatur nisi inventore non ipsa commodi voluptatum.
                        Minus saepe culpa optio tempore dolorum quia repellendus iste deserunt? Error quas delectus sapiente nisi quos, nobis, optio veniam voluptas earum dolorem velit enim quidem eos veritatis aperiam quod autem.
                        Ad veniam quasi maiores excepturi sapiente cum ex. A, natus neque? Corrupti quo, quis distinctio, voluptatum optio explicabo libero suscipit, minus omnis saepe corporis sunt. Laborum asperiores dolor natus explicabo!
                        Atque quasi ea harum deserunt illum libero voluptas repellendus tempore, illo quis accusantium minus id, repellat, nisi soluta dicta. Repudiandae exercitationem nemo a in totam ratione cum consequuntur assumenda omnis.
                        Ea sit facere minus. Impedit accusamus maxime, architecto totam corrupti facere deserunt ullam. Tempora voluptatum voluptatem maxime doloremque perspiciatis sequi fugiat quidem quod nemo, repudiandae pariatur optio qui eaque eius.
                        Rem similique delectus nostrum placeat molestias atque facilis nobis perferendis nulla dignissimos voluptate dolorum, aut ipsam repudiandae harum. Perferendis ad quod, pariatur delectus explicabo dolor doloremque sapiente maiores commodi necessitatibus.
                        Provident assumenda, asperiores adipisci deserunt commodi nesciunt excepturi iure iusto distinctio sapiente laudantium eum consequuntur unde vel quisquam error similique mollitia sed dolore incidunt neque sunt laboriosam tempora consectetur. Dolorem.
                        Adipisci amet maxime reprehenderit saepe asperiores dolor eligendi corrupti dolore ipsa! Ipsa, obcaecati modi eos, sint tempora distinctio, nobis doloribus labore ab sit aspernatur suscipit! Maxime molestiae id dolorum rem?
                        Inventore dolores sit at, velit praesentium voluptatem debitis doloribus! Fugit provident nulla consequuntur voluptate repellendus dignissimos, eaque consectetur animi voluptatibus commodi laborum pariatur quisquam dolorem hic est veritatis fuga? Blanditiis?
                        Inventore nulla aliquid nostrum eius facere suscipit odit esse eum, blanditiis, fugiat autem, repudiandae adipisci in? Ullam, molestias voluptatum. Sit expedita excepturi doloremque iusto dolorum culpa recusandae similique nemo vero.
                        Voluptatum atque ipsa quas saepe minima sed adipisci assumenda officia voluptatibus. Accusantium vero nihil sequi optio deleniti earum placeat consequuntur officia voluptates, excepturi dolore odit quisquam, reprehenderit, tenetur repellendus quia?
                        Quasi magni numquam, harum voluptates accusamus vero cumque saepe laborum, provident totam repellat incidunt ut magnam dolores blanditiis animi accusantium, sit corporis autem iure illo quibusdam ullam aspernatur. Voluptate, vitae.
                        Quas sit impedit est quidem ex obcaecati perferendis voluptatibus, quia similique nam harum necessitatibus ipsa. Veniam unde, quisquam natus error assumenda adipisci, molestiae consequatur eius, voluptas quibusdam esse similique. Aliquam.
                        Amet suscipit tempore autem beatae corporis aut, iusto vel sapiente, nobis laboriosam nulla accusantium eius voluptate maxime quos voluptas ex ad dolorem ea enim id nisi tenetur. Facere, ullam maiores.
                        Fuga reprehenderit, quae voluptate quod quis numquam nobis porro cum nam cupiditate fugiat velit aut enim quas explicabo esse praesentium quasi dignissimos libero! Tempore sit dolores, velit assumenda accusantium illo.
                        Necessitatibus, corrupti. Quae modi quod saepe corporis repellat cum molestiae, itaque labore ea tempore eaque necessitatibus, odit nam quis at alias sapiente dolore! Exercitationem vitae magnam libero pariatur commodi facilis?
                        Vel repudiandae sunt deserunt quisquam consectetur voluptas rerum perferendis dolor molestiae itaque neque doloribus est fuga assumenda voluptatum asperiores, saepe, delectus quia? Tempora libero tenetur at debitis quia, consequuntur est.
                        Delectus minus amet dolore quis obcaecati atque repellat quidem optio ipsa vel distinctio incidunt nisi libero eum, rem deleniti adipisci omnis. Doloribus maiores rem rerum hic veritatis, dolor ea ratione.
                        Possimus pariatur assumenda illo non ullam reiciendis, sed exercitationem distinctio id labore ipsam quasi ad? Natus animi quam illum praesentium aperiam! Laborum, libero expedita quam eveniet earum ut consequatur mollitia!
                        Enim amet iure excepturi cumque dolore autem quos tempora. Pariatur exercitationem veritatis cupiditate placeat dicta ratione quo laudantium est. Nobis doloremque recusandae saepe rerum dicta. Quasi sapiente quidem amet neque!
                        Aspernatur, repudiandae dolorum pariatur, iusto dolore nisi exercitationem minima assumenda tempore cumque suscipit? A possimus cupiditate ducimus architecto illo minima ea esse commodi dolor nam, culpa quo sunt quas quam!
                        Blanditiis porro molestias eius mollitia quia. Dicta enim repudiandae modi sapiente laudantium iusto! Odit atque distinctio eum reprehenderit illum sit non! Quasi totam sit similique sequi dolore animi commodi iusto?
                        Distinctio voluptate quos facilis modi quam earum fuga vero. Tempore, iusto minima. Repellat consectetur eaque dolorum voluptatibus vero explicabo a temporibus, quis quibusdam. Sint, quibusdam iste. Magnam molestias fugiat inventore.
                        Possimus quidem tenetur id dolores debitis! Minima, rerum. Sed quae libero eligendi minima ea vitae molestias nostrum quas tenetur accusantium repellendus veniam incidunt aliquid, maxime debitis molestiae, suscipit omnis obcaecati!
                        Qui quidem ea fugiat distinctio consectetur nobis cum! Corrupti, in quidem? Accusamus in ipsa quod, nesciunt soluta libero recusandae est vero sapiente iusto, sit sunt quae qui nulla inventore aut.
                        Accusamus unde sed ut similique voluptatum aliquid at sequi numquam consequuntur accusantium error a dolor hic nobis possimus voluptates molestias, corrupti omnis in officia obcaecati iste mollitia pariatur! Molestias, illo?
                        Minima nemo ullam expedita ipsa molestias fugit! Omnis ipsam porro ex commodi delectus sint repellat officia est? Earum sint cum autem quo iure, itaque iusto, vitae ut fuga ex error!
                        Architecto optio, voluptatem perferendis dolorem dicta dolor fugiat molestias rerum quia quisquam voluptate fuga reprehenderit ipsam praesentium deserunt obcaecati quo recusandae impedit est debitis ab mollitia distinctio. Incidunt, excepturi delectus?
                        Distinctio ducimus provident, inventore necessitatibus earum ratione voluptate non voluptates aperiam accusantium maxime pariatur voluptatibus harum omnis obcaecati at officia autem tenetur tempore sit consectetur blanditiis. Modi laboriosam vel dolor!
                        Rerum voluptatem adipisci harum, amet autem labore nisi error repellat earum ipsam. Ratione, iusto dolore blanditiis quidem omnis vel nostrum voluptates quo culpa cumque dicta qui error illo eum eveniet.
                        Sit nostrum quidem voluptatibus nulla quisquam quod! Eum, quibusdam ipsa! Veritatis labore cumque aliquid odit omnis maxime modi vitae dicta ullam fuga, eius praesentium animi tempore, nihil itaque nesciunt voluptatibus.
                        Aspernatur quam incidunt officiis. Quod eum voluptate ipsam nihil aut exercitationem, itaque nam amet enim a? Totam sint ad rem. Modi quis dicta, enim sint doloribus molestias quaerat adipisci rerum?
                        Consectetur quis, sapiente earum harum nobis eius suscipit cum quae praesentium vero omnis laborum ducimus explicabo labore, sunt perspiciatis? Odit possimus ipsam asperiores provident iste blanditiis numquam magnam eius voluptate.
                        Mollitia error nobis, est consequatur quo aut impedit nostrum similique dolor repudiandae consequuntur odio magni totam optio minima, tenetur officiis perferendis! At, quis! Similique animi voluptatum earum, placeat alias vitae?
                        Saepe praesentium error ab est! Quae perspiciatis, reprehenderit iusto necessitatibus numquam ullam facere nihil quos officiis, quod qui deleniti. Nulla quos saepe nesciunt eaque ipsa fuga earum deserunt aliquam amet.
                        Sint incidunt ut mollitia tempore, nam dolorum nobis ab non modi pariatur nulla temporibus voluptatem cumque asperiores ratione, ex impedit, reprehenderit soluta. Assumenda molestias dolorum numquam temporibus vel dolore dicta.
                        Quod incidunt rerum consequatur cum alias, eligendi eaque enim perspiciatis corrupti, id molestiae! Omnis incidunt velit, consequatur molestias quia facere, est beatae obcaecati similique quibusdam labore ducimus in veniam. Facere?
                        Odit reiciendis est assumenda deserunt, ex doloremque? Nihil quas illum voluptates asperiores, earum accusamus culpa? Officiis eligendi nostrum illo veritatis quisquam deserunt fuga molestiae omnis, iusto, reprehenderit blanditiis voluptas. Quae!
                        Praesentium neque in ab hic ipsa porro modi aut exercitationem? Minima, neque consequuntur eius dignissimos corporis sint, perspiciatis placeat facere nisi adipisci esse natus quod aut optio voluptate eveniet? Nisi.
                        Accusantium eius, atque repellendus fugiat laborum, provident nemo necessitatibus vitae rem suscipit alias! Dolorum facilis, consequatur voluptas fugit impedit culpa cumque porro animi at perferendis possimus, delectus voluptates ab recusandae.
                        Itaque, minus? Illum iste impedit omnis animi. Tempora quia quos voluptas quasi, odio magni debitis iusto corporis ratione facilis nobis nemo nam minima exercitationem vel vitae eaque. Iure, nisi ratione.
                        Itaque debitis quasi ex cumque accusantium. Quidem saepe illo qui dolore officia consequatur facilis facere quos, ducimus quaerat placeat neque aspernatur, tempore sint dignissimos eius eveniet quod cupiditate animi nostrum!
                        Dolorum ipsa, quam tempora est eius cum iure nostrum alias assumenda culpa numquam repudiandae dolores laudantium, voluptates obcaecati veniam! Magnam iusto reprehenderit soluta praesentium totam eum veniam ducimus ipsum possimus.
                        Iste incidunt culpa sunt, voluptas corporis fugiat non ratione quis alias soluta architecto corrupti deserunt similique laborum asperiores at, nam officiis. Rem animi quidem in dignissimos cumque saepe modi! Tenetur.
                        Doloribus earum odio maiores quae eum illum natus inventore a tempora quo, magnam voluptatum quas aliquam culpa voluptas itaque amet iste laboriosam aut pariatur laudantium illo est dolorum cum? Odit!
                        Dolorum dolorem nostrum sequi minus impedit rerum? Quaerat natus, blanditiis, quibusdam sequi tenetur, modi ab iure ea sunt illum dolores sit. Soluta consequuntur non voluptatum dicta? Architecto soluta quaerat accusamus.
                        Harum repellendus voluptatem officia corporis! Eum officia ducimus labore earum, cumque eos inventore rem sint aliquam, sed consequatur recusandae quas porro obcaecati excepturi minus placeat delectus molestias fugit in. Consectetur?
                        Quam, ea nostrum sequi sapiente aut repellendus labore cupiditate, placeat suscipit in nesciunt pariatur praesentium laboriosam eligendi culpa qui tenetur. Atque, rem? Ipsum temporibus ipsam, nulla dicta similique alias facilis.
                        Dolores reiciendis vitae dolorum, sapiente totam, sed praesentium voluptate inventore impedit, tenetur molestiae provident minus exercitationem quam facere! Ipsam, similique. Voluptatem nostrum beatae eaque similique sint illum ipsum blanditiis pariatur?
                        Necessitatibus, dolores? Amet facilis magnam autem enim eaque quod, explicabo vitae illum molestias repellendus itaque in rerum eum eveniet esse incidunt ratione! Mollitia voluptate culpa odio unde eius quia natus.
                        Aut voluptatibus odio, magni possimus dolorum temporibus corrupti. Asperiores error perferendis sunt temporibus molestiae enim veniam cumque dolores dolore ullam possimus, odio obcaecati? Dolor voluptatum omnis voluptates voluptate veniam blanditiis!
                        Repellat quos rem maiores perferendis exercitationem quas eos beatae sint dignissimos modi nobis enim aliquid sunt vel delectus nesciunt ab laboriosam ad tempore illum sapiente id facilis, tempora cupiditate. Iste.
                        Molestiae provident fugit adipisci, ipsam qui eligendi ab sapiente rem nihil cumque natus, minus architecto non dolore totam laboriosam. Dolores itaque dolor, totam excepturi voluptatem odit sed harum mollitia natus?
                        Voluptas cum nulla sunt vitae accusantium quis nihil eum illum, minima fugit, ratione, dignissimos id. Autem nostrum numquam repellat culpa ex. Tempore itaque consequatur harum sequi blanditiis molestiae debitis atque.
                        Nemo libero obcaecati unde quis saepe dolores explicabo, quam vel sunt nostrum ratione, itaque culpa. Laudantium quis repudiandae unde provident impedit commodi. Eligendi voluptatum sed perferendis, ipsam incidunt id beatae?
                        Quia rerum labore mollitia consequuntur eos cum. Aspernatur aperiam, incidunt, non consequuntur quos, nisi cupiditate voluptas suscipit debitis natus nulla. Impedit soluta sequi cupiditate veritatis blanditiis beatae iste quaerat tempore!
                        Tempora consectetur fugit earum. Earum officiis id expedita sunt cupiditate nobis iusto deserunt enim numquam, saepe minus esse sit aspernatur dolore ipsam, doloribus at? Voluptatem numquam deserunt reprehenderit fugiat. Veritatis!
                        Blanditiis reiciendis quas quia nihil est eos reprehenderit asperiores expedita at. Et iusto eligendi illo nemo cum optio mollitia itaque veniam sint labore, at ipsam illum repellendus blanditiis temporibus alias?
                        Eum ea quae suscipit nostrum libero totam eius expedita, ullam eligendi harum illo repudiandae repellat? A similique dolorem amet cumque, commodi quibusdam! Voluptatum suscipit quidem recusandae pariatur libero officia a?
                        Ipsum minima animi quidem repellat alias laudantium tempora quae nemo officia molestias est deleniti, unde amet nulla dicta sunt nihil totam dolorum, iure delectus, earum recusandae quaerat. Iure, voluptate eligendi?
                        Culpa delectus deserunt, sequi esse fugit quae dicta odit. Nihil fuga, qui, eveniet rerum debitis earum nam vitae temporibus at quisquam nisi aut, atque illum culpa accusamus dolorum numquam ducimus.
                        Mollitia repudiandae quam, adipisci nostrum quas dolor numquam ea voluptatibus officiis soluta consequuntur itaque tempora nisi totam, dicta, corrupti quibusdam. Ut labore fugit, iste in exercitationem numquam ipsam rerum vitae?
                        A enim nostrum cupiditate quidem nobis. Excepturi voluptatem similique quidem earum odio, totam doloribus corrupti repellat. Voluptatum, aspernatur. Perspiciatis quam quidem quia, dolore eaque pariatur asperiores architecto beatae voluptas vel.
                        Blanditiis incidunt asperiores deserunt, quaerat suscipit nisi ipsa quibusdam qui dicta, expedita, explicabo saepe omnis perspiciatis inventore iusto sed quam maxime quisquam sequi vel ea reiciendis ut? Inventore, quos dignissimos.
                        Cupiditate laborum soluta sed beatae omnis quia assumenda obcaecati laboriosam amet voluptas laudantium molestiae nostrum esse nobis dolor, repellendus enim nesciunt impedit. Laborum nam ut explicabo eaque! Ex, delectus ratione.
                        Autem labore quas, voluptates et quos quae doloribus, natus nemo obcaecati quasi cupiditate voluptatibus quisquam aperiam quod voluptas optio. Obcaecati aliquam nulla qui commodi, cumque hic nisi facere quod dicta.
                        Atque, minima. Atque libero illum optio quibusdam perspiciatis! At labore libero nesciunt assumenda natus amet blanditiis ea enim eum dolorum, commodi repellendus laudantium culpa impedit corporis id sunt maiores excepturi.
                        Incidunt est corrupti veniam quidem. Cumque consequatur labore magni aspernatur dignissimos ipsum soluta nulla, nihil sapiente maxime facere quae. Magnam iure voluptatem omnis laudantium magni ipsum dolor incidunt alias consequatur!
                        Cum voluptatum quae rerum iure iusto tempore facere vero beatae. Quae ab odio nulla porro obcaecati esse iste ratione eos fuga eius rerum, beatae, eligendi totam nihil molestiae repellat illo.
                        Cum id similique cumque suscipit quos, iusto numquam odit? Deleniti, saepe voluptas. Temporibus vero eum corrupti autem adipisci nisi quisquam rem? Aliquam laudantium fuga corporis aperiam quia modi exercitationem iste.
                        Aspernatur nisi id similique delectus praesentium possimus, eveniet expedita ipsam laborum cumque eligendi eum iure ut sequi sit labore maiores, at voluptatibus veritatis et. Ex exercitationem quis aliquam assumenda totam?
                        Labore quo voluptatum natus cum nostrum odit atque odio est cumque! Similique at adipisci officiis qui fuga aliquam doloribus voluptates corrupti aperiam, dicta optio id quo quisquam a, est obcaecati.
                        Quaerat quasi reprehenderit nobis illo alias vel cumque? Animi soluta nam cum eaque pariatur architecto quae natus, labore, esse magnam quod incidunt fugit aspernatur provident magni. Adipisci beatae recusandae aperiam?
                        Atque, maiores, placeat modi eos quas at soluta laborum quaerat, saepe error officiis nihil similique architecto nisi explicabo iure iste laudantium animi voluptatem inventore! Eos nihil dicta dignissimos dolor deleniti.
                        Quos deleniti facere modi, quibusdam quas quisquam cum rerum, cupiditate vitae porro voluptates, dolorem tempore ratione minima. Alias, debitis, quisquam quibusdam sapiente laborum dolorum possimus rerum expedita nam animi natus.
                        Commodi reiciendis recusandae eveniet odit minus animi consequuntur natus, consectetur dolorem dolores temporibus illum magnam at non quidem velit ab, tempora nihil suscipit quasi. Consectetur beatae expedita rerum officiis sit?
                        In alias dignissimos maxime suscipit eaque, ratione facilis libero? Eum quos necessitatibus harum, impedit praesentium deserunt nulla adipisci molestiae corporis veritatis ipsam provident suscipit tempora iste cumque aliquid totam alias.
                        Ipsum voluptatum saepe fuga officiis magnam atque ipsam reprehenderit recusandae, debitis dolor minus natus placeat consequuntur impedit? Totam libero, tenetur illo, esse possimus eum nam vel quidem magnam quas dolore.
                 
                    </main>
                </Section>
                <Aside>
                    <Anno>sidebar</Anno>
                    <div className='aside_hero'>
                    <img 
                        src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="hero"
                        width={230}
                        height={230}
                    />
                    <p>오늘도 코딩... </p>
                    <hr />
                    </div>
                    <AsideSticky>
                        <ul className='aside_category'>
                            <h4>Category</h4>
                            <MenuItem link={'/web1'} name={'web1'}/>
                            <MenuItem link={'/web2'} name={'web2'}/>
                            <MenuItem link={'/web3'} name={'web3'}/>
                            <MenuItem link={'/web4'} name={'web4'}/>
                        </ul>
                        <ul className='aside_tag'>
                            <h4>Tag</h4>
                            <MenuItem link={'/'} name={'home'}/>
                            <MenuItem link={'/about'} name={'about'}/>
                        </ul>
                        <ul>
                            <h4>인기글</h4>
                            <li>1글이 인기많습니다.</li>
                            <li>자바스크립트란?</li>
                        </ul>                
                    </AsideSticky>
                   
                </Aside>
            <Nav>
                <Anno>Navigation</Anno>
                <p>슬라이드</p>
            </Nav>
            <Footer>
                <Anno>footer</Anno>
                <FooterItem>
                    <div>
                        <address>dfdfd.com</address>
                    </div>
                </FooterItem>
            </Footer>
            </GridWrap>
        </div>
        <TopBtn onClick={goToTop}>Top</TopBtn>
        </Wrapper>
    )
}
export default handle;