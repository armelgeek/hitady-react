import React from 'react'

export default function SearchBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-section">
                        <div className="flex relative bg-white shadow-xl">
                            <div className="flex w-full items-center justify-between">
                                <div className="p-10 text-center">
                                    <h6 className="uppercase font-bold">hotel</h6>
                                    <input
                                        type="text"
                                        name="text"
                                        placeholder="dubai"
                                        className="form-control "
                                    />
                                </div>
                                <div className="search-body">
                                    <h6>check in</h6>
                                    <div
                                        role="wrapper"
                                        className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                        <input
                                            placeholder="18 april"
                                            id="datepicker"
                                            data-type="datepicker"
                                            data-guid="b14ba988-379d-0aa0-0bcf-a5665548063a"
                                            data-datepicker="true"
                                            className="form-control"
                                            role="input"
                                        /><span className="input-group-append" role="right-icon"
                                        ><button
                                            className="btn btn-outline-secondary border-left-0"
                                            type="button"
                                        >
                                                <i className="gj-icon">event</i>
                                            </button></span>
                                    </div>
                                </div>
                                <div className="search-body">
                                    <h6>check out</h6>
                                    <div
                                        role="wrapper"
                                        className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                        <input
                                            placeholder="20 april"
                                            id="datepicker1"
                                            data-type="datepicker"
                                            data-guid="c21b7fea-da03-2089-2507-cf4eb2a5aad5"
                                            data-datepicker="true"
                                            className="form-control"
                                            role="input"
                                        /><span className="input-group-append" role="right-icon"
                                        ><button
                                            className="btn btn-outline-secondary border-left-0"
                                            type="button"
                                        >
                                                <i className="gj-icon">event</i>
                                            </button></span>
                                    </div>
                                </div>
                                <div className="search-body">
                                    <h6>guests</h6>
                                    <div className="qty-box">
                                        <div className="input-group">
                                            <span className="input-group-prepend">
                                                <button
                                                    type="button"
                                                    className="btn quantity-left-minus"
                                                    data-type="minus"
                                                    data-field
                                                >
                                                </button>
                                            </span>
                                            <input
                                                type="text"
                                                name="quantity"
                                                className="form-control input-number"
                                                defaultValue="{1}"
                                            />
                                            <span className="input-group-prepend">
                                                <button
                                                    type="button"
                                                    className="btn quantity-right-plus"
                                                    data-type="plus"
                                                    data-field
                                                >
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-body btn-search">
                                    <div className="right-part">
                                        <a href="#" className="btn btn-primary color1">search</a>
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
