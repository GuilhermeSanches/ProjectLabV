describe('getDados',function(){
  it('Test1', function(){
    expect(getDados.dados('[{"soma":"100","mes":"12","desc":"Moradia"}]')).toBe('100');
  });
   it('Test2', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"12","desc":"Moradia"}]')).toBe('200.5');
  });
    it('Test3', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"11","desc":"Moradia"}]')).toBe(0);
  });
   it('Test4', function(){
    expect(getDados.dados('[{"soma":"0.5","mes":"12","desc":"Moradia"}]')).toBe('0.5');
  });
  it('Test5', function(){
    expect(getDados.dados(null)).toBe(null);
  });
 
});
