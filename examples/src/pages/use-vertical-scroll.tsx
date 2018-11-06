import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import useVerticalScroll from '../../../packages/use-vertical-scroll/src'
import Page from '../../components/Page'

const styles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '250px',
  padding: '16px',
  textAlign: 'center'
}

const VerticalScrollExample: React.SFC<RouteComponentProps> = () => {
  const shallowThreshold = useVerticalScroll(0, 249)
  const mediumThreshold = useVerticalScroll(250, 499)
  const deepThreshold = useVerticalScroll(500)

  return (
    <Page>
      <h1>Vertical Scroll</h1>
      {shallowThreshold && <div style={{ ...styles, backgroundColor: 'red', color: '#fff' }}>Scroll State: shallow</div>}
      {mediumThreshold && <div style={{ ...styles, backgroundColor: 'yellow' }}>Scroll State: medium</div>}
      {deepThreshold && <div style={{ ...styles, backgroundColor: 'blue', color: '#fff' }}>Scroll State: deep</div>}
      <p>
        <Link to="/">Go back home</Link>
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum
        quoque ei rei nomen inponere, cur non liceat Catoni? Etiam inchoatum, ut, si iuste depositum reddere in recte factis sit, in
        officiis ponatur depositum reddere; Primum in nostrane potestate est, quid meminerimus? Animum autem reliquis rebus ita perfecit, ut
        corpus; <i>Paria sunt igitur.</i> Leonidas autem, rex Lacedaemoniorum, se in Thermopylis trecentosque eos, quos eduxerat Sparta, cum
        esset proposita aut fuga turpis aut gloriosa mors, opposuit hostibus. Nisi enim id faceret, cur Plato Aegyptum peragravit, ut a
        sacerdotibus barbaris numeros et caelestia acciperet? Duo Reges: constructio interrete. Haeret in salebra. Materiam vero rerum et
        copiam apud hos exilem, apud illos uberrimam reperiemus. <i>Id est enim, de quo quaerimus.</i> Cum autem progrediens confirmatur
        animus, agnoscit ille quidem naturae vim, sed ita, ut progredi possit longius, per se sit tantum inchoata.{' '}
      </p>

      <p>
        Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. An ea, quae per vinitorem antea
        consequebatur, per se ipsa curabit? Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.{' '}
        <a href="http://loripsum.net/" target="_blank">
          Maximus dolor, inquit, brevis est.
        </a>{' '}
        Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur.{' '}
        <b>Praeteritis, inquit, gaudeo.</b> At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Non igitur potestis
        voluptate omnia dirigentes aut tueri aut retinere virtutem. Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat
        transfixus, hastam. Curium putes loqui, interdum ita laudat, ut quid praeterea sit bonum neget se posse ne suspicari quidem.{' '}
        <mark>Et quod est munus, quod opus sapientiae?</mark>{' '}
        <a href="http://loripsum.net/" target="_blank">
          Tamen a proposito, inquam, aberramus.
        </a>{' '}
        <i>Nunc vides, quid faciat.</i>{' '}
      </p>

      <img src="https://picsum.photos/1920/1080/?image=93" />

      <p>
        Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Quid ei reliquisti, nisi te, quoquo modo
        loqueretur, intellegere, quid diceret? Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Dempta enim
        aeternitate nihilo beatior Iuppiter quam Epicurus; Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur,
        Oblivionis, inquit, mallem. <b>Idemne potest esse dies saepius, qui semel fuit?</b> <b>Tria genera bonorum;</b> Nos quidem Virtutes
        sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Sed eum qui audiebant, quoad poterant, defendebant sententiam
        suam. <i>Quam si explicavisset, non tam haesitaret.</i> Intrandum est igitur in rerum naturam et penitus quid ea postulet
        pervidendum; Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret?{' '}
      </p>

      <p>
        Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum referebat, non ad voluptatem. Innumerabilia dici possunt
        in hanc sententiam, sed non necesse est.{' '}
        <a href="http://loripsum.net/" target="_blank">
          Quantum Aristoxeni ingenium consumptum videmus in musicis?
        </a>{' '}
        Ita enim vivunt quidam, ut eorum vita refellatur oratio. <i>Tenent mordicus.</i> <i>Audeo dicere, inquit.</i>{' '}
        <a href="http://loripsum.net/" target="_blank">
          Quis est tam dissimile homini.
        </a>{' '}
        Primum cur ista res digna odio est, nisi quod est turpis? Omnium enim rerum principia parva sunt, sed suis progressionibus usa
        augentur nec sine causa; Quo modo autem optimum, si bonum praeterea nullum est?{' '}
      </p>

      <p>
        <a href="http://loripsum.net/" target="_blank">
          Satis est ad hoc responsum.
        </a>{' '}
        <b>Iam enim adesse poterit.</b> Illorum vero ista ipsa quam exilia de virtutis vi! Quam tantam volunt esse, ut beatum per se
        efficere possit. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quod maxime efficit
        Theophrasti de beata vita liber, in quo multum admodum fortunae datur. Si stante, hoc natura videlicet vult, salvam esse se, quod
        concedimus; Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Fatebuntur Stoici haec omnia dicta esse praeclare,
        neque eam causam Zenoni desciscendi fuisse.{' '}
      </p>

      <p>
        Quibus natura iure responderit non esse verum aliunde finem beate vivendi, a se principia rei gerendae peti; <i>An tu me de L.</i>{' '}
        Quae similitudo in genere etiam humano apparet. Sed tamen omne, quod de re bona dilucide dicitur, mihi praeclare dici videtur. Cur
        haec eadem Democritus? Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et
        conveniens decretis eius reperietis.{' '}
      </p>

      <p>
        Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Quis, quaeso, illum negat et
        bonum virum et comem et humanum fuisse? At enim iam dicitis virtutem non posse constitui, si ea, quae extra virtutem sint, ad beate
        vivendum pertineant. Praeterea sublata cognitione et scientia tollitur omnis ratio et vitae degendae et rerum gerendarum. Ergo in
        iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et quicquid ipsis expediat facturos
        arbitrabimur?{' '}
        <a href="http://loripsum.net/" target="_blank">
          Quamquam te quidem video minime esse deterritum.
        </a>{' '}
        Perfecto enim et concluso neque virtutibus neque amicitiis usquam locum esse, si ad voluptatem omnia referantur, nihil praeterea est
        magnopere dicendum. Ex quo intellegitur nec intemperantiam propter se esse fugiendam temperantiamque expetendam, non quia voluptates
        fugiat, sed quia maiores consequatur. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad
        corpus. <b>Sed eum qui audiebant, quoad poterant, defendebant sententiam suam.</b>{' '}
      </p>

      <img src="https://picsum.photos/1920/1080/?image=919" />

      <p>
        Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. An ea, quae per vinitorem antea
        consequebatur, per se ipsa curabit? Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.{' '}
        <a href="http://loripsum.net/" target="_blank">
          Maximus dolor, inquit, brevis est.
        </a>{' '}
        Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur.{' '}
        <b>Praeteritis, inquit, gaudeo.</b> At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Non igitur potestis
        voluptate omnia dirigentes aut tueri aut retinere virtutem. Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat
        transfixus, hastam. Curium putes loqui, interdum ita laudat, ut quid praeterea sit bonum neget se posse ne suspicari quidem.{' '}
        <mark>Et quod est munus, quod opus sapientiae?</mark>{' '}
        <a href="http://loripsum.net/" target="_blank">
          Tamen a proposito, inquam, aberramus.
        </a>{' '}
        <i>Nunc vides, quid faciat.</i>{' '}
      </p>

      <p>
        Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Quid ei reliquisti, nisi te, quoquo modo
        loqueretur, intellegere, quid diceret? Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Dempta enim
        aeternitate nihilo beatior Iuppiter quam Epicurus; Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur,
        Oblivionis, inquit, mallem. <b>Idemne potest esse dies saepius, qui semel fuit?</b> <b>Tria genera bonorum;</b> Nos quidem Virtutes
        sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Sed eum qui audiebant, quoad poterant, defendebant sententiam
        suam. <i>Quam si explicavisset, non tam haesitaret.</i> Intrandum est igitur in rerum naturam et penitus quid ea postulet
        pervidendum; Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret?{' '}
      </p>

      <p>
        Itaque quantum adiit periculum! ad honestatem enim illum omnem conatum suum referebat, non ad voluptatem. Innumerabilia dici possunt
        in hanc sententiam, sed non necesse est.{' '}
        <a href="http://loripsum.net/" target="_blank">
          Quantum Aristoxeni ingenium consumptum videmus in musicis?
        </a>{' '}
        Ita enim vivunt quidam, ut eorum vita refellatur oratio. <i>Tenent mordicus.</i> <i>Audeo dicere, inquit.</i>{' '}
        <a href="http://loripsum.net/" target="_blank">
          Quis est tam dissimile homini.
        </a>{' '}
        Primum cur ista res digna odio est, nisi quod est turpis? Omnium enim rerum principia parva sunt, sed suis progressionibus usa
        augentur nec sine causa; Quo modo autem optimum, si bonum praeterea nullum est?{' '}
      </p>

      <p>
        Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Tamen aberramus a proposito, et, ne longius, prorsus, inquam,
        Piso, si ista mala sunt, placet. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quo studio cum satiari non
        possint, omnium ceterarum rerum obliti níhil abiectum, nihil humile cogitant; Nam prius a se poterit quisque discedere quam
        appetitum earum rerum, quae sibi conducant, amittere.{' '}
      </p>
    </Page>
  )
}

export default VerticalScrollExample
