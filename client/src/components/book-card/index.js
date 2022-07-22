import React from "react";
import { API_ASSETS_URL } from "../../utility/app.constant";
import {Link} from "react-router-dom";


const BookCard=({book,index})=>{

    return(


<div class="col-md-6 col-xl-4 grid-margin stretch-card" key={index}>
                <div class="card pb-0 ">
                  <div class="card-body pb-0">
                    <h4 class="card-title">{book?.title}</h4>
                    <div class="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                      <div class="item">
                        <img src={`${API_ASSETS_URL}/${book?.cover}`} alt="" className="img-fluid"/>
                      </div>
                     
                    </div>
                    <div class="d-flex py-4">
                      <div class="preview-list w-100">
                        <div class="preview-item p-0">
                          <div class="preview-item-content d-flex flex-grow">
                            <div class="flex-grow">
                              <div class="d-flex d-md-block d-xl-flex justify-content-between align-items-center">
                                <h6 class="preview-subject">{book?.author}</h6>
                                <p class="text-muted text-small">{`${book?.pages} pages`}</p>
                                <p class="text-muted text-small">{` Année ${book?.year} `}</p>
                              </div>
                              <p class="text-muted pt-1"><Link to="">Résumé</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

    )
}

export default BookCard;