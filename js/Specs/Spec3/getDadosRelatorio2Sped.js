describe('getDados',function(){
    it('Test1', function(){
    expect(getDados.Result('[{"ano":"2015","media":"2200.5","contador":"3"}]')).toBe(2012);
  });
   it('Test2', function(){
    expect(getDados.Result('[{"ano":"2012","media":"2200.5","contador":"3"}]')).toBe(2012);
  });
  it('Test3', function(){
    expect(getDados.Result(null)).toBe(null);
  });

 
});
