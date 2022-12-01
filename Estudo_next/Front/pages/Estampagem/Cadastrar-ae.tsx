import React from 'react'
import { CadastrarAeContainer } from '../../src/components/Cadastrar_Ae/cadastrar_aeS'

export default function CadastrarAe() {
  return (
    <CadastrarAeContainer>
      <h1>Estampagem</h1>
      <div className='card bg-light text-dark mb-6'>
        <div className='card_header'>
          <div className='row'>
            <div className="col-sm-8 col">
              <div className="w-100"></div>
              <button type='button' className='btn btn-sm btn-primary' style={{ margin: "0px 0px 2px", width: "144px" }}>Listagem de AEs</button>
            </div>
            <div className='container col'>
              <button type='button' className='btn btn btn-sm btn-primary' style={{ width: "188px", margin: "0px 0px 2px" }}>Imprimir Comprovante</button>
              <button type='button' className='btn btn btn-sm btn-primary' style={{ margin: "0px 0px 2px 8px", width: "146px" }}>Imprimir OS</button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className="col">
            <div className='card_body'>
              <div className='row'>
                {/* preencher */}
                <div className='col'>
                  <label htmlFor="" className='label mb-0' >Número Autorização</label>
                  <div className='input-group'>
                    <input type="number" className="form-control form-control-sm" />
                    <div className='input-group-append'>
                      <button type='button' className='btn btn-sm btn-primary'>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="search" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-search b-icon bi">
                          <g>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <label htmlFor="chassis" className='label mb-0'>Chassi</label>
                  <input id='chassis' type="text" name='chassis' className='form-control form-control-sm' />
                  <div className='w-100'></div>
                  <div className='col'>
                    <div className='custom-control custom-checkbox' style={{ marginLeft: '-14px', fontSize: '13px' }}>
                      <input id='checkbox' className='custom-control-input' type='checkbox' value={'accepted'} />
                      <label htmlFor="checkbox" className='custom-control-label'>
                        Veiculos anteriores a 22/01/1998
                      </label>
                    </div>
                  </div>
                </div>

                <div className="w-100"></div>
                {/* status */}
                <div className='col'>
                  <label htmlFor="" className='label mb-0'>Status AE</label>
                  <input type="text" className="form-control form-control-sm" disabled />
                </div>
                <div className='col'>
                  <label htmlFor="" className='label mb-0'>Categoria Veiculo</label>
                  <input type="text" className="form-control form-control-sm" disabled />
                </div>

                <div className="w-100"></div>
                {/* status footer */}
                <div className='col'>
                  <label htmlFor="" className='label mb-0'>Espécie Veículo</label>
                  <input type="text" className="form-control form-control-sm" disabled />
                </div>
                <div className='col'>
                  <label htmlFor="" className='label mb-0'>Tipo de Veículo</label>
                  <input type="text" className="form-control form-control-sm" disabled />
                </div>

                <div className="w-100"></div>
              </div>
              <div className="row"></div>
              <div className="row">
                <div className="col">
                  <div>
                    <button type='button' className='btn btn-sm btn-block btn-dark' style={{ margin: '10px 0px 0px' }}>Anexar Fotos</button>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div>
                      {/* procurando algo?? */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row mt-3'>
              <div className='col-12 d-flex justify-content-center'>
                <div className="placa placa-moto">
                  <div className="placa-moto-texto">
                    <div className='row justify-content-center text-black'> EOY 
                    </div>
                    <div className='row justify-content-center text-black'> 7E87 
                    </div>
                  </div>
                </div>
                {/* <div className='Placa Placa_carro'>
                  <div className='Placa-carro-texto text-black'>  DVB0E22 </div>
                </div> */}
              </div>
            </div>

            <div className='bv-example-row'>
              <div className='row justify-content-md-center'>

                <div className='col-lg-3 col'>
                  <div className='mb-1'>
                    <span className='badge badge-success'>
                      DIANTEIRA
                      <br />
                      220923061669931
                    </span>
                  </div>
                </div>

                <div className='col-lg-3 col'>
                  <div className='mb-1'>
                    <span className='badge badge-success'>
                      TRASEIRA
                      <br />
                      220923061669932
                    </span>
                  </div>
                </div>

                <div className='col-lg-3 col'>
                  <div className='mb-1'>
                    <span className='badge badge-danger'>SEGUNDA TRASEIRA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col'>
            <div className='col'>
              <label htmlFor="" className='label mb-0'>Solicitante/Despachante</label>
              <select className='custom-select'>
                <option value="" disabled> Selecione um solicitante na lista, caso não apareça clique em Cadastrar Solicitante</option>
              </select>
            </div>
            <div className='col'>
              <button className='btn btn-sm btn-primary' style={{ margin: '6px 0px' }}> Cadastrar Solicitante </button>
            </div>
            <div>
              <div className='col'>
                <button type='button' className='btn btn-sm btn-danger' style={{ margin: '2px' }}> Alterar </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="col">
              <label htmlFor="" className='label mb-0'>Proprietário</label>
              <select className='custom-select'>
                <option value="" disabled> Selecione um cliente na lista, caso não apareça Clique em Cadastrar Cliente</option>
              </select>
            </div>
            <div className='col'>
              <button className='btn btn-sm btn-primary' style={{ margin: '8px 0px 6px' }}>Cadastrar Proprietário</button>
            </div>
          </div>

        </div>
      </div>
    </CadastrarAeContainer>
  )
}