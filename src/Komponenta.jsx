const Komponenta = ({ children, korisnici }) => {
  return (
    <div>
      <div>
        {korisnici.map((korisnik) => {
          return (
            <div>
              <p>
                {korisnik.name}: {korisnik.age}
              </p>
            </div>
          );
        })}
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Komponenta;
