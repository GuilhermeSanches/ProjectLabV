describe('getDados',function(){
  it('Test1', function(){
    expect(getDados.dados('[{"soma":"100","mes":"12","descr":"Moradia"}]')).toBe('Moradia');
  });
   it('Test2', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"12","descr":"Moradia"}]')).toBe('Moradia');
  });
    it('Test3', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"11","descr":"Alimentacao"}]')).toBe('Alimentacao');
  });
    it('Test3', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"11","descr":"Alimentacao"}]')).toBe('Alimentacao');
  });
    it('Test4', function(){
    expect(getDados.dados('[{"soma":"200.5","mes":"1","descr":"Saude"}]')).toBe('Saude');
  });

  it('Test5', function(){
    expect(getDados.dados(null)).toBe(null);
  });
 
});
