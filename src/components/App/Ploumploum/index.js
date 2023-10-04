import './style.scss';

function Ploumploum() {
  return (
    <button
      type="button"
      className="ploumploum"
      onClick={() => {
        alert('Ploumploum');
      }}
    >
      Ploumploum
    </button>
  );
}

export default Ploumploum;
